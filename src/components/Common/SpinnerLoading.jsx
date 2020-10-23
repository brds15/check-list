import React from 'react';
import load from '../../assets/loading.svg';
import './SpinnerLoading.scss'

export default function SpinnerLoading() {
  return <img className='Spinner' src={load}  alt='Loading'/>;
}
