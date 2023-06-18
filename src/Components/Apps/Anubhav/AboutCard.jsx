import Lottie from 'react-lottie';

const AboutCard = ({ title, icon, content, ...rootDOMAttributes }) => {
  return (
    <div
      {...rootDOMAttributes}
      className="m-4 flex h-[95px] w-[15%] flex-row items-center justify-between rounded-lg bg-[#3f3f3f] hover:cursor-pointer hover:bg-[#3f3f3fbf]"
    >
      <div className="ml-4 mr-2 w-[23%]">
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
