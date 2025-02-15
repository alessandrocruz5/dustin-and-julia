import React, { ReactNode } from "react";

interface SegmentProps {
  children: ReactNode;
  direction?: "row" | "col";
  isMobile?: boolean;
}

// function Segment({ children, direction = "row", isMobile = false }: SegmentProps) {
//   return (
//     <div className="w-full min-h-screen sm:my-16 md:my-24 lg:my-32">
//       <div
//         className={`
//           max-w-7xl m-auto px-4 md:px-8 lg:px-16 h-full
//           ${
//             direction === "row"
//               ? "flex flex-col md:flex-row justify-around items-center gap-8 md:gap-16"
//               : "flex flex-col gap-8"
//           }
//         `}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

function Segment({ children, direction = "row", isMobile = false }: SegmentProps) {
  return (
    <div className="w-full min-h-screen sm:my-16 md:my-24 lg:my-32">
      <div className={`max-w-7xl m-auto px-20 md:px-8 lg:px-16 h-full`}>
        {direction === "row" ? (
          isMobile ? (
            // Mobile row layout
            <div className="flex flex-col items-center gap-8 w-full">
              {children}
            </div>
          ) : (
            // Desktop row layout
            <div className="flex justify-between items-center w-full">
              {children}
            </div>
          )
        ) : (
          // Column layout (same for both mobile and desktop)
          <div className="flex flex-col gap-8">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default Segment;
