export interface WorkItem {
  id: string;
  companyName: string;
  meta: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const WORK_ITEMS: WorkItem[] = [
  {
    id: "dktechin",
    companyName: "DK Techin",
    meta: "프론트엔드 개발 / 2022.05 ~ 재직중",
    image: {
      src: "/images/dkt_img.png",
      alt: "DK Techin 로고",
      width: 220,
      height: 220,
    },
  },
];
