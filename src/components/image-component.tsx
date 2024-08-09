'use client';

import { cn } from '@/lib/utils';
import type { ImageComponentProps } from '@/types/tmdb-types';
import { CldImage } from 'next-cloudinary';
import { useEffect, useState } from 'react';

export default function ImageComponent({
    src,
    alt,
    width,
    height,
    className,
    fill = false,

    ...props
}: ImageComponentProps) {
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(false);
    }, [src]);

    return (
        <CldImage
            onError={() => setError(true)}
            src={
                error
                    ? 'https://placehold.jp/414144/ffffff/200x300.png?text=No%20Image'
                    : src
            }
            deliveryType="fetch"
            alt={alt}
            width={width}
            height={height}
            className={cn(className)}
            fill={fill}
            priority={true}
            {...props}
        />
    );
}
