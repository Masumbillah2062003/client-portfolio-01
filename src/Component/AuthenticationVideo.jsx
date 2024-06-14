import video from "../assets/Images/b8bd4e4273cceae2889d9d259b04f732.mp4";
const AuthenticationVideo = () => {
  return (
    <div>
      <figure className="flex justify-center items-center">
        <video src={video} loop autoPlay className="w-full" muted></video>
      </figure>
    </div>
  );
};

export default AuthenticationVideo;
