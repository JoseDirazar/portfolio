import SpaceInvaders from "@/components/space-invaders";
import { SiBevy, SiRust } from "react-icons/si";
import { BiSolidInvader } from "react-icons/bi";

export default function SpaceInvadersPage() {
  return (
    <div className="text-center">
      <h1 className="align-center -mt-10 mb-10 flex flex-row justify-center gap-x-4 font-sans text-4xl font-bold tracking-wider underline">
        <BiSolidInvader className="animate-bounce" />
        Space Invaders
        <BiSolidInvader className="animate-bounce" />
      </h1>
      <p>Welcome to my first game developed using</p>
      <div className="my-5 flex flex-row items-center justify-center gap-7">
        <p className="text-xl">
          <SiBevy className="mr-2 inline-block" size={40} />
          Bevy
        </p>
        <strong> & </strong>
        <p className="text-xl">
          <SiRust className="mr-2 inline-block" size={40} />
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
