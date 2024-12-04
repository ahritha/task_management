import React, { FC } from 'react';

type Props = {
  total: number;
  func: () => void;
  currentTotal: number;
};

const LoadMore: FC<Props> = ({ total, func, currentTotal }) => {
  const isDisabled = currentTotal === total;

  return (
    <>
      {!isDisabled && (
        <div className="flex justify-center mt-4 text-sm">
          <button
            role="button"
            onClick={func}
            className="cursor-pointer bg-gray-50 p-2 border rounded-lg"
            aria-label="Load more tasks"  
            aria-disabled={isDisabled}  
            disabled={isDisabled} 
          >
            Load 10 more
          </button>
        </div>
      )}
    </>
  );
};

export default LoadMore;
