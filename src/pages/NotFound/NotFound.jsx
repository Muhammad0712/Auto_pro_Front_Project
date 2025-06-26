const NotFound = () => {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center px-4">
        {/* Animatsiya style */}
        <style>
          {`
            @keyframes tracking-in-expand-fwd-bottom {
              0% {
                letter-spacing: -0.5em;
                transform: translateZ(-700px) translateY(500px);
                opacity: 0;
              }
              40% {
                opacity: 0.6;
              }
              100% {
                transform: translateZ(0) translateY(0);
                opacity: 1;
              }
            }
  
            .tracking-in-expand-fwd-bottom {
              animation: tracking-in-expand-fwd-bottom 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
            }
          `}
        </style>
  
        <h1 className="text-6xl font-bold text-red-600 tracking-in-expand-fwd-bottom">
          404
        </h1>
        <p className="mt-4 text-xl text-gray-700 tracking-in-expand-fwd-bottom">
          Sahifa topilmadi
        </p>
      </div>
    );
  };
  
  export default NotFound;
  