import * as React from 'react'
import uniqueId from 'lodash.uniqueid'

import FacialHair from './facialHair'
import HairColor from './HairColor'

export default class LongHairBigHair extends React.Component {
  static optionValue = 'LongHairBigHair'
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private mask3 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private path3 = uniqueId('react-path-')

  render () {
    const { mask1, mask2, mask3, path1, path2, path3 } = this
    return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id={path1} x='0' y='0' width='264' height='280' />
          <path
            d='M222.384814,182.806274 C217.011239,188.518122 211.648364,192.127879 211.831204,198 C212.148076,209.888877 255.439069,245.051165 216.999964,267.00001 L16.0053198,267 C-22.4337677,245.051165 20.8572256,209.888877 21.1740982,198 C21.3569373,192.127879 15.9940628,188.518122 10.6204878,182.806274 C5.24691269,177.094426 -0.137362978,169.280486 0.00267373922,155 C0.944497502,125.971596 31.3716806,128.588232 31.2026676,109 C31.3716806,89.9992744 19.8139454,82.1607482 31.2026676,46 C42.8395963,9.53932757 72.9165934,0.768171773 116.002651,0.0159928999 L116.002651,0 C116.16951,0.002426813 116.336177,0.0049705256 116.502651,0.0076322645 C116.669125,0.0049705256 116.835791,0.002426813 117.002651,0 L117.002651,0.0159928999 C160.088708,0.768171773 190.165705,9.53932757 201.802634,46 C213.191356,82.1607482 201.633621,89.9992744 201.802634,109 C201.633621,128.588232 232.060804,125.971596 233.002628,155 C233.142665,169.280486 227.758389,177.094426 222.384814,182.806274 Z M182.884023,95.3249541 C161.364085,83.7373848 142.890027,67.1442914 130.845581,48.302359 C112.763849,73.9237118 76.5299076,78.5347548 51.2240944,94.679971 C51.0770557,95.4306015 51,96.2063021 51,97 L51,110 C51,116.018625 55.4308707,121.002364 61.2085808,121.867187 C62.9518066,142.114792 75.4692178,159.282984 93,167.610951 L93,186 L89,186 L89,186 C49.235498,186 17,218.235498 17,258 L17,267 L217,267 L217,258 C217,218.235498 184.764502,186 145,186 L141,186 L141,167.610951 C158.530782,159.282984 171.048193,142.114792 172.791419,121.867187 C178.569129,121.002364 183,116.018625 183,110 L183,97 C183,96.4315537 182.960475,95.8723389 182.884023,95.3249541 Z'
            id={path2}
          />
          <path
            d='M222.384814,182.806274 C217.011239,188.518122 211.648364,192.127879 211.831204,198 C212.148076,209.888877 255.439069,245.051165 216.999964,267.00001 L16.0053198,267 C-22.4337677,245.051165 20.8572256,209.888877 21.1740982,198 C21.3569373,192.127879 15.9940628,188.518122 10.6204878,182.806274 C5.24691269,177.094426 -0.137362978,169.280486 0.00267373922,155 C0.944497502,125.971596 31.3716806,128.588232 31.2026676,109 C31.3716806,89.9992744 19.8139454,82.1607482 31.2026676,46 C42.8395963,9.53932757 72.9165934,0.768171773 116.002651,0.0159928999 L116.002651,0 C116.16951,0.002426813 116.336177,0.0049705256 116.502651,0.0076322645 C116.669125,0.0049705256 116.835791,0.002426813 117.002651,0 L117.002651,0.0159928999 C160.088708,0.768171773 190.165705,9.53932757 201.802634,46 C213.191356,82.1607482 201.633621,89.9992744 201.802634,109 C201.633621,128.588232 232.060804,125.971596 233.002628,155 C233.142665,169.280486 227.758389,177.094426 222.384814,182.806274 Z M93,186 L89,186 L89,186 C49.235498,186 17,218.235498 17,258 L17,267 L217,267 L217,258 C217,218.235498 184.764502,186 145,186 L141,186 L141,140 L93,140 L93,186 Z'
            id={path3}
          />
        </defs>
        <mask id={mask2} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Big-Hair' mask={`url(#${mask2})`}>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(16.000000, 13.000000)'>
              <mask id={mask3} fill='white'>
                <use xlinkHref={'#' + path2} />
              </mask>
              <use fill='#314756' xlinkHref={'#' + path2} />
              <HairColor maskID={mask3} />
            </g>
            <g
              id='Shadow'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(16.000000, 13.000000)'>
              <mask id={mask1} fill='white'>
                <use xlinkHref={'#' + path3} />
              </mask>
              <g id='Shape' />
              <path
                d='M30.0988695,115.056827 C27.7250732,118.08281 24.5296181,122.528485 24.3618393,122.19381 C26.2345006,119.810609 27.3747977,117.011661 27.3409475,113.436088 C27.517612,95.334874 15.4366324,87.8674306 27.3409475,53.4185647 C28.0096512,51.5090274 29.1070085,49.7044671 30.585889,48.0048838 C20.2433352,82.4586863 31.3685109,90.3556196 31.2026676,109 C31.2224682,111.294844 30.8223327,113.284923 30.0988695,115.056827 Z M202.419413,48.0048838 C203.898293,49.7044671 204.995651,51.5090274 205.664354,53.4185647 C215.822041,82.8130155 208.516445,92.5627534 206.263744,106.036479 C205.964379,106.841192 206.195125,107.789747 205.880216,108.603009 C175.207016,98.1454461 147.589972,78.5596292 131.494917,55.6119279 C108.710969,85.0357527 58.3544031,85.3732378 33.6737341,110.936101 C34.0607045,110.391798 34.4280855,109.884956 34.7584999,109.446288 C57.2940449,79.527377 108.24688,80.3241416 130.845581,48.302359 C146.243536,72.3904102 172.664446,92.9495135 202.009146,103.926748 C202.310417,103.073073 202.089664,102.077381 202.376063,101.232679 C204.483829,87.4002546 211.215481,77.3069293 202.419413,48.0048838 Z'
                id='Shadow-Mask'
                fillOpacity='0.16'
                fill='#000000'
                mask={`url(#${mask1})`}
              />
            </g>
            <path
              d='M50.7584999,122.446288 C73.2940449,92.527377 124.24688,93.3241416 146.845581,61.302359 C162.243536,85.3904102 188.664446,105.949514 218.009146,116.926748 C218.310417,116.073073 218.089664,115.077381 218.376063,114.232679 C220.531197,100.089398 227.520377,89.8551619 217.802634,59 C206.165705,22.5393276 176.088708,13.7681718 133.002651,13.0159929 C132.336177,13.0049705 132.16951,13.0024268 132.002651,13 C88.9165934,13.7681718 58.8395963,22.5393276 47.2026676,59 C35.8139454,95.1607482 47.3716806,102.999274 47.2026676,122 C47.2350518,125.753256 46.1441426,128.691293 44.3525888,131.192923 C44.5361111,131.59459 48.5061717,125.436551 50.7584999,122.446288 Z'
              id='Light'
              fillOpacity='0.1'
              fill='#FFFFFF'
              fillRule='evenodd'
            />
            <FacialHair />
            {this.props.children}
          </g>
        </g>
      </g>
    )
  }
}
