import { FaArrowCircleRight } from "react-icons/fa";
import { A } from "../common/A";
import { DevCardProps } from "@/lib/forgebyteslab";
import Image from "next/image";
import Link from "next/link";

export default function DevCard({
  avatar,
  description,
  href,
  name,
  role,
}: DevCardProps) {
  return (
    <div className="max-w-sm rounded-xl bg-white p-6 text-center shadow-lg dark:bg-gray-700/50">
      <Image
        src={avatar}
        alt={description}
        width={96}
        height={96}
        className="mx-auto mb-4 h-24 w-24 rounded-full"
      />
      <h2 className="mb-4 text-xl font-semibold text-gray-400 dark:text-gray-500">
        {name}
      </h2>
      <p className="mb-4 text-gray-500 dark:text-gray-400">{role}</p>
      <p className="mb-6 text-gray-700 dark:text-white">{description}</p>
      <Link
        href={href}
        className="flex items-center justify-center gap-x-3 rounded bg-gray-600 px-3 py-2 font-bold"
      >
        Profile
        <FaArrowCircleRight size={23} />
      </Link>
    </div>
  );
}
