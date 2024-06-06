import ReviewForm from '@/app/ui/products/reviews/create-review'

export default function Page({ params }: { params: { id: string } }) {
    return <div>
        <ReviewForm id={params.id} ></ReviewForm>
    </div>;
  }