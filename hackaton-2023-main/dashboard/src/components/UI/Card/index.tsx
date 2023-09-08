/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Card as AntdCard} from 'antd';
const { Meta } = AntdCard;

type CardProps = {
  img: string,
  title: string,
  desc: string,
  onClick: () => any
}
const Card: React.FC<CardProps> = ({
  img,
  title,
  desc,
  onClick
}) => (
  <AntdCard
    hoverable
    onClick={onClick}
    style={{ width: 240 }}
    cover={<img alt={title} src={img} />}
  >
    <Meta title={title}  description={desc}  />
  </AntdCard>
);

export default Card;