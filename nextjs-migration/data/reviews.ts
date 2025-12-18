export interface Review {
  name: string
  rating: number
  text: string
}

export const reviews: Review[] = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Absolutely fantastic service! Pro Fit transformed our bathroom into a stunning space. Professional, punctual, and the quality is outstanding.',
  },
  {
    name: 'Michael Brown',
    rating: 5,
    text: "We had our kitchen completely renovated and couldn't be happier. The team was professional, clean, and the attention to detail was impressive.",
  },
  {
    name: 'Emma Davies',
    rating: 5,
    text: 'From start to finish, the whole process was seamless. Great communication, excellent workmanship, and our new bathroom looks amazing!',
  },
]
