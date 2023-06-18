import Lottie from 'react-lottie';

const AboutCard = ({ title, icon, content, ...rootDOMAttributes }) => {
  return (
    <div
      {...rootDOMAttributes}
      className="bg-[#3f3f3f] w-[15%] h-[95px] m-4 flex flex-row items-center justify-between rounded-lg hover:cursor-pointer hover:bg-[#3f3f3fbf]"
    >
      <div className="w-[23%] ml-4 mr-2">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: icon,
            renderer: 'svg',
          }}
        />
      </div>
      <div className="w-[70%]">
        <div className="text-xl font-bold text-gray-200">{title}</div>
        <div className="text-sm text-gray-400">{content}</div>
      </div>
    </div>
  );
};

export default AboutCard;
