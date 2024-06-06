import { fetchReviewsByProductId } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import { StarIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import ReviewForm from '@/app/ui/products/reviews/create-review'


export default async function ProductReviews({id}:{id: string}){
    const reviews = await fetchReviewsByProductId(id)
    if (reviews.length < 1){
        return <div className='w-full p-4 divide-y divide-solid divide-black'>
        <h2 className={`${lusitana.className} text-xl md:text-2xl`}>Product Reviews</h2>
        <div divide-y divide-solid divide-grey-700>
            <p>No Reviews</p>
        {/* <Link href={`/products/reviews/${id}`}  className='font-bold underline'>
            Be the first to leave a review!</Link> */}
            <ReviewForm id={id} ></ReviewForm>
            </div></div>
    }
    return <div className='w-full p-4 divide-y divide-solid divide-black'>
        <h2 className={`${lusitana.className} text-xl md:text-2xl`}>Product Reviews</h2>
        <div divide-y divide-solid divide-grey-700>

        {
            reviews.map((review, i) => {
                switch(review.rating) {
                    case 1:{
                        var rating = [1,0,0,0,0];
                        break;
                    }
                    case 2:{
                        var rating = [1,1,0,0,0];
                        break;
                    }
                    case 3:{
                        var rating = [1,1,1,0,0];
                        break;
                    }
                    case 4:{
                        var rating = [1,1,1,1,0];
                        break;
                    }
                    case 5:{
                        var rating = [1,1,1,1,1];
                        break;
                    }
                    default:{
                        var rating = [0,0,0,0,0];
                        break;
                    }
                }
                return (
                    <div key={review.id} className='p-2'>
                        <div className='flex flex-row'>
                        {
                            rating.map((rate, i) => {
                                if (rate == 1){
                                    return <StarIcon key={i} className='w-5 text-amber-700 fill-amber-700' />
                                } else{
                                    return <StarIcon key={i} className='w-5 text-amber-700' />
                                }
                            })
                        }</div>
                        <p className='font-bold'>{review.user_name}</p>
                        <p>{review.comment}</p>
                    </div>
                )
            })
        }
        </div>
        <ReviewForm id={id} ></ReviewForm>
        
    </div>
}