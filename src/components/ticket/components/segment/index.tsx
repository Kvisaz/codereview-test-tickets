import React from 'react';
import { ISegment } from 'store';
import { Cell } from '../cell';
import styles from './segment.module.css';
import { Services } from '../../../../services';


export interface ISegmentProps {
  segment: ISegment;
}

export const Segment: React.FC<ISegmentProps> = ({ segment }) => {
  return (
    <div className={styles.segment}>
      <Cell label={getFromToLabel(segment)} value={getFromToValue(segment)} />
      <Cell label={getTimeLabel()} value={getTimeValue(segment)} />
      <Cell label={getTransferLabel(segment)} value={getTransferValue(segment)} />
    </div>
  );
};

function getFromToLabel(s: ISegment): string {
  return `${s.origin} - ${s.destination}`.toUpperCase();
}

function getFromToValue(s: ISegment): string {
  return `${getHoursMinutesString(s.dateStart)} - ${getHoursMinutesString(s.dateEnd)}`.toUpperCase();
}

function getHoursMinutesString(dateUTC: number): string {
  const date = new Date(dateUTC);
  const hours = date.getHours();
  const mins = date.getMinutes();
  return `${timeToString(hours)}:${timeToString(mins)}`;
}

function timeToString(hours: number): string {
  let str = hours.toString();
  if (str.length < 2) str = `0${str}`;
  return str;
}

function getTimeLabel(): string {
  return Services.strings.segmentTimeLabel.toUpperCase();
}

function getTimeValue(s: ISegment): string {
  const minutes = (s.dateEnd - s.dateStart) / (60 * 1000);
  const hours = Math.floor(minutes / 60);
  const minLast = Math.floor(minutes % 60);
  return `${timeToString(hours)}ч ${timeToString(minLast)}м`;
}

function getTransferLabel(s: ISegment): string {
  const amount = s.stops.length;
  if (amount === 0) return Services.strings.segmentTransfersNoneLabel;
  return `В пути ${amount} пересадки`;
}

function getTransferValue(s: ISegment): string {
  return s.stops.join(', ').toUpperCase();
}