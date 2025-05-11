import { Globe, Phone, MapPin, SquareArrowOutUpRight } from "lucide-react";

export const contactInfo = [
  {
    id: 1,
    label: "enchanteddsf.com",
    icon: <SquareArrowOutUpRight size={18} />,
  },
  { id: 2, label: "+1 (234) 567-890", icon: <Phone size={18} /> },
  { id: 3, label: "123 Magic Lane, Wonderland", icon: <MapPin size={18} /> },
];
import {
  MdRateReview,
  MdAddAPhoto,
  MdShare,
  MdBookmarkBorder,
  MdPersonAdd,
  MdOutlinePhotoCamera,
  MdDiscount,
} from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FiPlus, FiShare } from "react-icons/fi";

export const actions = [
  {
    id: 1,
    label: "Write a review",
    icon: <FaRegStar size={20} />,
  },
  {
    id: 2,
    label: "Add photos/videos",
    icon: <MdOutlinePhotoCamera size={20} />,
  },
  {
    id: 3,
    label: "Share",
    icon: <FiShare size={20} />,
  },
  {
    id: 4,
    label: "Save",
    icon: <MdBookmarkBorder size={20} />,
  },
  {
    id: 5,
    label: "Follow",
    icon: <FiPlus size={20} />,
  },
];
import {
  FcShop,
  FcBusinesswoman,
  FcApproval,
  FcDepartment,
  FcPlanner,
} from "react-icons/fc";
import Dashboard from "@/app/dashboard/page";

export const highlights = [
  {
    id: 1,
    label: "Locally owned & operated",
    icon: <FcShop size={30} />,
  },
  {
    id: 2,
    label: "Women & operated",
    icon: <FcBusinesswoman size={30} />,
  },
  {
    id: 3,
    label: "Certified profesionals",
    icon: <FcApproval size={30} />,
  },
  {
    id: 4,
    label: "Established in 3022",
    icon: <FcDepartment size={30} />,
  },
  {
    id: 5,
    label: "Available by appointment",
    icon: <FcPlanner size={30} />,
  },
  {
    id: 6,
    label: "Discounts available",
    icon: <MdDiscount size={30} color="#e11d48" />,
  },
];

export const images = [
  { id: 1, img: "/room1.jpeg" },
  { id: 2, img: "/room2.jpeg" },
  { id: 3, img: "/room3.jpeg" },
  { id: 4, img: "/room4.jpeg" },
  { id: 5, img: "/room5.jpeg" },
  { id: 6, img: "/room6.jpeg" },
];

export const tablist = [
  {id:1, title: 'Profile', value: 'profile'},
  {id:2, title: 'My Posts', value: 'my-posts'},
  {id:3, title: 'Upload Post', value: 'upload-post'},
]
