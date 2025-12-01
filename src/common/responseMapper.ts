

export const ResponseMapper = (response: any) => {
    return {
        page: response.page,
        total: response.total,
        limit: response.limit,
        data: response.data.map((item: any) => ({
            ...item,
            image: item.images?.[0],
            images: undefined
        }))
    };
};
