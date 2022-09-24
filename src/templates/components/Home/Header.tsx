import CoverImage from '../../../img/coverImage.jpeg';
import ProfileImage from '../../../img/profileImage.png';
import { FaTwitter, FaGithub } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="bg-transparent bg-cover bg-fixed relative h-screen w-full " style={{backgroundImage: `url(${CoverImage})`}}>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-teal-300 bg-opacity-70 "></div>
      <div className="w-[72rem] mx-auto px-4">
        <div className="w-full h-100vh table">
          <div className="text-center table-cell align-middle px-0 py-32">
            {/* カバー画像 */}
            <div className="!bg-cover bg-center bg-no-repeat relative h-50 w-50 mb-7 rounded-full " style={{backgroundImage: `url(${ProfileImage})`}}></div>
            {/* 名前と肩書はみなさんのお名前や肩書を自由に入れてください */}
            <h1 className="text-white relative">あなたの名前</h1>
            <h3 className="text-white relative">あなたの肩書(ex.Engineer)</h3>
            <ul className="m-0 p-0">
              <li className="m-0 p-0 list-none inline-block relative">
                {/* リンク先(href)は任意のURLを設定してください */}
                <a href="https://twitter.com/">
                  <FaTwitter color="white" size="2rem" />
                </a>
              </li>
              <li className="m-0 p-0 list-none inline-block relative">
                <a href="https://github.com/">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
