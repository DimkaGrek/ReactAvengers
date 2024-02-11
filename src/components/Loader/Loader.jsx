import { Watch } from 'react-loader-spinner';
import s from './Loader.modules.css';

const Loader = ({ className = 'backdrop', width = '80', height = '80' }) => {
  return (
    <div className={`s.${className}`}>
      <Watch
        visible={true}
        height={height}
        width={width}
        radius="48"
        color="#0ef387"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
        className={s.loader}
      />
    </div>
  );
};

export default Loader;
