export interface ITestimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  text: string;
  rating: number;
  image?: string;
}

export interface ITestimonialsProps {
  testimonials: ITestimonial[];
}
