import Image from 'next/image';
import AnubhavImg from '../../../assets/anubhav.jpeg';

const Header = () => {
  return (
    <div>
      <div className="pt-3">
        <Image
          src={AnubhavImg}
          alt="anubhav singh"
          className="w-[10%] mx-auto rounded-full"
        />
        <div className="max-w-[60%] mx-auto text-center text-white">
          <div className="text-2xl py-2">
            Hi, I am <span className="text-[#FF8551]"> Anubhav Singh</span>
          </div>
          <div className="text-lg py-1.5">Full Stack Developer, From INDIA</div>
          <div className="pt-2 text-justify">
            As a MERN developer with expertise in Java, and Python, I&apos;m a
            coding aficionado. I love crafting robust and scalable applications
            using MongoDB, Express.js, React, and Node.js (MERN). When I&apos;m
            not busy chasing bugs, you&apos;ll catch me nostalgically diving
            into old PC games and strategizing my next chess move, proudly
            embracing my inner coding nerdiness!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
