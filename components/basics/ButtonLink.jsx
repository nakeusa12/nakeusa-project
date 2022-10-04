import Link from "next/link";

export const ButtonLink = ({href, value}) => {
  return (
    <Link href={href}>
      <a
        className="button--winona p-0 dark:bg-black dark:hover:bg-white bg-white hover:bg-main-dark hover:text-white dark:hover:text-main-dark relative block focus:outline-none border border-solid dark:border-white border-black rounded-sm text-sm text-center font-semibold uppercase tracking-widest align-middle overflow-hidden max-w-[230px] min-w-[100px]"
        data-text={value}
      >
        <span className="align-middle block">{value}</span>
      </a>
    </Link>
  );
};
