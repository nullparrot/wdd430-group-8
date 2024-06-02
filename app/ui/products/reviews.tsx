import { fetchReviewsByProductId } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import { StarIcon as BlankStar, CodeBracketIcon } from '@heroicons/react/24/outline';
import { StarIcon as FullStar } from '@heroicons/react/24/solid';


export default async function ProductReviews({id}:{id: string}){
    const reviews = await fetchReviewsByProductId(id)
    console.log(reviews.length)
    if (reviews.length < 1){
        return <div className='w-full p-4 divide-y divide-solid divide-black'>
        <h2 className={`${lusitana.className} text-xl md:text-2xl`}>Product Reviews</h2>
        <div divide-y divide-solid divide-grey-700>
            <p>No Reviews</p></div></div>
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
                                    return <FullStar key={i} className='w-5' />
                                } else{
                                    return <BlankStar key={i} className='w-5' />
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
        
    </div>
}