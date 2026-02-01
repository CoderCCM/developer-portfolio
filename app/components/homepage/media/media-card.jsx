// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';

function MediaCard({ media }) {
  return (
    <Link target="_blank" href={media.url} className="block h-full">
      <div className="h-full flex flex-col border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group cursor-pointer">
        
        {/* Image */}
        <div className="h-44 lg:h-52 w-full overflow-hidden rounded-t-lg">
          <Image
            src={media?.cover_image}
            height={1080}
            width={1920}
            alt=""
            className="h-full w-full group-hover:scale-110 transition-all duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-2 sm:p-3 flex flex-col flex-1">
          
          {/* Date */}
          <div className="flex justify-between items-center text-orange-500 text-sm">
            <p>{timeConverter(media.published_at)}</p>
          </div>

          {/* Title */}
          <p className="my-2 lg:my-3 text-lg text-white sm:text-xl font-medium hover:text-orange-500">
            {media.title}
          </p>

          {/* Description: scrollable if too long */}
          <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 flex-1 overflow-y-auto">
            {media.description}
          </p>

        </div>
      </div>
    </Link>
  );
}

export default MediaCard;
