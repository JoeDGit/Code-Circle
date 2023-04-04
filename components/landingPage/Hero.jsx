import Image from 'next/image';
import landingPageImage from '../../images/landingPageImage.svg';
import Button from '../../components/Button';
import arrow from '../../images/arrow.svg';
import { useRouter } from 'next/router';

export default function Hero() {
  const router = useRouter();
  return (
    <main className="bg-[url('../images/waveyLines.svg')] bg-auto bg-no-repeat bg-[50%] flex justify-center bg-[#043873] pt-[150px] pb-[650px] 2xl:pt-[220px] 2xl:pb-[760px] w-full h-full">
      <div className="absolute flex flex-col w-[85%] gap-[20px] 2xl:flex-row  2xl:gap-[40px]">
        <div className="flex flex-col justify-center gap-[10px]">
          <div className="text-[30px] md:text-[48px] 2xl:text-[64px] font-bold text-[#fff] text-center 2xl:text-left">
            Get More Done with Code Circle
          </div>
          <div className="text-base font-normal text-[#fff] font-sans text-center 2xl:font-2xl 2xl:text-left">
            Empowering developers to come together and create, our platform is
            your ultimate collaboration partner for coding success.
          </div>
          <Button
            containerPos={'justify-center 2xl:justify-start'}
            label="Try Code Circle Free"
            size="medium"
            image={arrow}
            className="w-[250px] mt-14"
            onClick={() => {
              router.push('/create-an-account');
            }}
          />
        </div>

        <Image
          src={landingPageImage}
          className="2xl:w-[70%] xl:w-[45%] lg:w-[50%] md:w-[60%] w-[90%] h-auto self-center"
          alt="two people using video chat via a laptop"
        />
      </div>
    </main>
  );
}
