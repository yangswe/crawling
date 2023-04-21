

declare module "SearchTypes" {
    interface SearchResultType
        
        {
            title: string,
            locationName: string,
            price: string|number,
            link: string,
            imageSrc: string
        }

    }