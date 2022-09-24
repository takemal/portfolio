import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../UIkit/PrimaryButton";

export const Contact = () => {
  const navigate = useNavigate();
  const goToTwitter = useCallback(()=>{
    navigate('https://twitter.com/')
  },[])

  return (
    <div className="py-32  px-0 clear-both bg-teal-300">
      <div className="w-74 mx-auto px-4">
        <div className="text-white text-center">
          <h2>Contact to Me!</h2>
          <p>お仕事のご相談・ご依頼など下記よりご連絡ください。</p>
          <PrimaryButton
            label={"Contact Us"}
            onClick={goToTwitter}
          />
        </div>
      </div>
    </div>
  );
};