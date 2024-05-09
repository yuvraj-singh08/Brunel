import React from 'react';

function HomeLoading() {
    return (
        <>
            {/* Header Skeleton */}
            <div className="h-20 m-8 rounded-xl bg-gray-300 animate-pulse"></div>

            {/* Heading Content Skeleton */}
            <div className="mx-auto mt-10 w-96 animate-pulse h-40 bg-gray-300 rounded-xl"></div>

            {/* Main Section Skeleton */}
            <div className="mx-auto mt-10 max-w-4xl animate-pulse h-96 bg-gray-300 rounded-xl"></div>

        </>
    );
}

export default HomeLoading;
