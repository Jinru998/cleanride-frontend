import { FC, Fragment } from 'react';
import Pageheader from '../../../components/pageheader/pageheader';
import { Gallerylist } from './data/gallerydata';

interface GalleryProps { }

const Gallery: FC<GalleryProps> = () => {
  return (
    <Fragment>
      <Pageheader title="Gallery" heading="Apps" active="Gallery" />
      <Gallerylist />
    </Fragment>
  );
};

export default Gallery;
