import { useEffect, useState } from 'react';
import { quotes } from "../../../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  const [visibleContent, setVisibleContent] = useState('');
  const [visibleName, setVisibleName] = useState('');
  const [visibleTitle, setVisibleTitle] = useState('');

  useEffect(() => {
    let contentTimeout;
    let nameTimeout;
    let titleTimeout;

    const typeContent = () => {
      if (visibleContent.length < content.length) {
        setVisibleContent(content.slice(0, visibleContent.length + 1));
        contentTimeout = setTimeout(typeContent, 100);
      } else {
        nameTimeout = setTimeout(typeName, 150); // Delay before starting the name animation
      }
    };

    const typeName = () => {
      if (visibleName.length < name.length) {
        setVisibleName(name.slice(0, visibleName.length + 1));
        nameTimeout = setTimeout(typeName, 50);
      } else {
        titleTimeout = setTimeout(typeTitle, 60); // Delay before starting the title animation
      }
    };

    const typeTitle = () => {
      if (visibleTitle.length < title.length) {
        setVisibleTitle(title.slice(0, visibleTitle.length + 1));
        titleTimeout = setTimeout(typeTitle, 30);
      }
    };

    contentTimeout = setTimeout(typeContent, 100);

    return () => {
      clearTimeout(contentTimeout);
      clearTimeout(nameTimeout);
      clearTimeout(titleTimeout);
    };
  }, [visibleContent, content, visibleName, name, visibleTitle, title]);

  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />

      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
        {visibleContent}
      </p>

      <div className="flex flex-row">
        <img src={img} alt={visibleName} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {visibleName}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {visibleTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;