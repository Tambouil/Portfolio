import ProfileImg from "./ProfileImg";
import TextBlock from "./TextBlock";

const Header = () => {
  return (
    <section id="home" className="px-4 pb-6 sm:px-8 ">
      <div className="flex flex-col items-center max-w-screen-xl mx-auto sm:items-start sm:flex-row sm:flex-wrap">
        <TextBlock />
        <ProfileImg />
      </div>
    </section>
  );
};

export default Header;
