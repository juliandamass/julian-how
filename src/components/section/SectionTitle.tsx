"use client";

interface ISectionTitle {
  number?: number;
  title: string;
}

const SectionTitle = ({ number, title }: ISectionTitle) => {
  return (
    <div className="flex gap-2">
      <span className="text-gray-400">
        {number && number < 10 ? `0${number}` : number}
      </span>
      <span className="text-xl font-semibold">{title}</span>
    </div>
  );
};

export default SectionTitle;
