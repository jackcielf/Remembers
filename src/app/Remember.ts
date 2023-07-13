export interface Remember {
  id?: number;
  title: string;
  description: string;
  image: string;
  create_at?: string;
  update_at?: string;
  comments?: [{ text: string; username: string }];
}
