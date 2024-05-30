import { fetchReviewsByProductId } from '@/app/lib/data';


export default async function ProductReviews({id}:{id: string}){
    const reviews = await fetchReviewsByProductId(id)
    console.log(reviews)
    return <div>
        <p>Reviews Blank {id}</p>
    </div>
}