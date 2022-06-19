import Image from "next/image";
import profilePic from "@/public/assets/img/profile-img.jpg";

const profileImg = () => {
  return (
    <div className="mt-4 lg:mt-0 lg:w-1/2">
      <div className="flex items-center justify-center lg:justify-end">
        <div className="max-w-lg">
          <div className="object-cover object-center w-full h-64 rounded-md shadow">
            <Image
              src={profilePic}
              alt="Picture of the author"
              width={400}
              height={300}
              objectFit="cover"
              className="rounded-md shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default profileImg;
