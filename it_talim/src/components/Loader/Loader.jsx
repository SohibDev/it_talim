import React, { Suspense } from 'react';

export const Loader = ({ children }) => {
	return <Suspense fallback={<div>...loading</div>}>{children}</Suspense>;
};
