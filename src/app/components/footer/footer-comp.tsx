import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
function Footer() {
  return (
    <>
      {/* footer */}
      <div className="flex bg-gray-900 h-40 w-full justify-between items-center px-4 border-t-[1px] border-gray-500 z-50">
        <div className="flex flex-col gap-2">
          <div>
            <div className="text-3xl font-sans font-bold">NUE-COMM</div>
            <div className="text-blue-200 text-lg">#KeepMoving</div>
          </div>
          <div className="text-sm">Design By @emsammz</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <FaGithub size={30} />
            <FaXTwitter size={30} />
            <FaLinkedin size={30} />
          </div>
          <div>Developed By emsammz</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
