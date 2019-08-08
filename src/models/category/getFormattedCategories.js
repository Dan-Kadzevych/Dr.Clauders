async function getFormattedCategories() {
    const categories = await this.find({ parent: null });

    const promises = categories.map(async category => {
        const subCategories = await this.find({ parent: category.id }).populate(
            {
                path: 'parent',
                select: 'slug'
            }
        );

        return {
            ...category.toObject(),
            subCategories
        };
    });

    const formattedCategories = await Promise.all(promises);

    return formattedCategories;
}

module.exports = getFormattedCategories;
