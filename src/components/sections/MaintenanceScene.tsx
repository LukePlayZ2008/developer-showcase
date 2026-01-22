const MaintenanceScene = () => {
  return (
    <div className="relative w-64 h-64 mx-auto">
      {/* Floating 3D Cube */}
      <div className="absolute inset-0 flex items-center justify-center animate-float">
        <div className="relative preserve-3d animate-rotate-slow">
          {/* Cube faces */}
          <div className="cube">
            <div className="cube-face cube-front" />
            <div className="cube-face cube-back" />
            <div className="cube-face cube-left" />
            <div className="cube-face cube-right" />
            <div className="cube-face cube-top" />
            <div className="cube-face cube-bottom" />
          </div>
        </div>
      </div>

      {/* Decorative floating shapes */}
      <div className="absolute top-4 left-8 w-4 h-4 rounded-full bg-primary/30 animate-float-delayed" />
      <div className="absolute bottom-8 right-4 w-6 h-6 rounded-full bg-primary/20 animate-float" />
      <div className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-primary/40 animate-float-slow" />
      <div className="absolute bottom-4 left-1/4 w-2 h-2 rounded-full bg-primary/30 animate-float-delayed" />
      <div className="absolute top-8 right-8 w-5 h-5 rounded bg-primary/25 rotate-45 animate-float-slow" />
    </div>
  );
};

export default MaintenanceScene;
