import { BiSolidInvader } from "react-icons/bi";
import { SiBevy, SiRust } from "react-icons/si";
import SpaceInvaders from "./space-invaders";

export default function SpaceInvadersPage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl underline font-sans font-bold tracking-wider -mt-10 mb-10 flex flex-row justify-center align-center gap-x-4">
        <BiSolidInvader className="animate-bounce" />
        Space Invaders
        <BiSolidInvader className="animate-bounce" />
      </h1>
      <p>Welcome to my first game developed using</p>
      <div className="flex flex-row justify-center items-center gap-7 my-5">
        <p className="text-xl">
          <SiBevy className="inline-block mr-2" size={40} />
          Bevy
        </p>
        <strong> & </strong>
        <p className="text-xl">
          <SiRust className="inline-block mr-2" size={40} />
          Rust
        </p>{" "}
      </div>
      <p className="">
        This project was an exciting journey for me as a programmer,
      </p>
      <p>where I learned a lot while building it like ECS aproach, game loop</p>
      <p className="mb-10">and a little bit more of Rust.</p>
      <SpaceInvaders />
    </div>
  );
}
