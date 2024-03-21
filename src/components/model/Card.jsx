import ThreeDModelViewer from './ThreeDModelViewer';

function Card() {
  return (
    <div className="p-8">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <ThreeDModelViewer modelPath="/gITF/low_poly_alpaca/scene.gltf" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Mi modelo 3D</div>
          <p className="text-gray-700 text-base">
            Aquí va la descripción de tu modelo 3D.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
