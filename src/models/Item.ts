import mongoose, { Schema, Document } from 'mongoose';

export interface ItemDTO extends Document {
  _id: string;
  title: string;
  image_url: string;
  video_url: string;
  type: string;
  synopsis: string;
  excerpt: string;
  content: string;
  categories: string;
  age_restriction: number;
  createdAt: Date;
  updatedAt: Date;
}

const ItemSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    video_url: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    synopsis: {
      type: String,
    },
    excerpt: {
      type: String,
    },
    content: {
      type: String,
    },
    categories: {
      type: String,
      required: true,
    },
    age_restriction: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<ItemDTO>('Item', ItemSchema);
