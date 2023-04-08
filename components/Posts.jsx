import Link from 'next/link';
import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import HomePagePostCard from '../components/HomePagePostCard';
import { orderBy, query, getDocs, collection } from 'firebase/firestore';
import styles from '../css/posts.module.css';
import Button from './Button';
import { useAuthContext } from '../hooks/useAuthContext';
import Loader from './Loader';
import { useRouter } from 'next/router';
import { FaHotjar, FaSort } from 'react-icons/fa';
import { getReplies } from '../hooks/getReplies';

async function getPosts() {
  const postsCol = collection(db, 'posts');
  const orderByPostTimeQuery = query(postsCol, orderBy('postTime', 'desc'));
  const getOrderedPosts = await getDocs(orderByPostTimeQuery);
  const postsList = getOrderedPosts.docs.map((doc) => doc.data());

  return postsList;
}

async function searchPosts(searchTerm) {
  const postsCol = collection(db, 'posts');
  const orderByPostTimeQuery = query(postsCol, orderBy('postTime', 'desc'));
  const getOrderedPosts = await getDocs(orderByPostTimeQuery);
  const postsList = getOrderedPosts.docs.map((doc) => doc.data());
  const filteredPosts = postsList.filter((post) => {
    return (
      post.programmingLanguage
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      post.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.postTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.projectDescription.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  return filteredPosts;
}

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuthContext();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    searchPosts(searchTerm).then(setPosts);
  }, [searchTerm]);

  useEffect(() => {
    getReplies().then((response) => {
      setReplies(response);
    });
  }, []);
  const replyCountByPostId = posts.map((post) => {
    let count = 0;
    replies.forEach((reply) => {
      if (reply.postId === post.postId) {
        count++;
      }
    });

    const idOfPost = post.postId;
    const postWithReplyCount = { [idOfPost]: count };
    return postWithReplyCount;
  });
  useEffect(() => {
    getPosts(db).then((response) => {
      setPosts(response);
      setIsLoading(false);
    });
  }, []);

  if (!isLoading && posts.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center w-[100vw]  h-[100vh]">
        <div
          onClick={() => {
            setSearchTerm('');
          }}
          className="text-xl font-light font-sans text-[#52525b] mt-5 cursor-pointer"
        >
          {'< Search Again'}
        </div>
        <div className="text-3xl font-bold font-sans mb-5">
          No Results Found
        </div>
      </div>
    );
  } else {
    return (
      <main className="flex flex-col items-center pt-[150px]">
        {isLoading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-5 justify-between items-center mb-5 w-11/12 md:w-3/4 bg-white py-2.5 px-8 rounded-[15px] drop-shadow border border-[#eaeaea]">
            <div className="flex gap-20 ">
              <div className="flex items-center gap-2 cursor-pointer">
                <FaHotjar className="text-[#fb8c00] text-4xl" /> Hot
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <FaSort className="text-[#4f9cf9] text-4xl" /> Sort
              </div>
            </div>
            <form className="w-full md:w-2/5">
              <input
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="search"
                placeholder="Search Posts"
                className="w-full h-full border-2 border-[#eaeaea] text-[16px] font-sans font-light py-2.5 px-5 rounded-[15px]"
                required
              />
            </form>

            <Button
              type="secondary"
              label="Create a Post"
              href={'/create-a-post'}
            />
          </div>
        )}
        {posts.map((post) => {
          return (
            <HomePagePostCard
              key={post.postId}
              post={post}
              replyCountByPostId={replyCountByPostId}
            />
          );
        })}
      </main>
    );
  }
}
