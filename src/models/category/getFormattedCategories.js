/* eslint-disable no-underscore-dangle */
async function getFormattedCategories() {
    const categories = await this.find({ parent: null }).lean({
        virtuals: true
    });

    const promises = categories.map(async category => {
        const subCategories = await this.find({
            parent: category.id
        })
            .populate({
                path: 'parent',
                select: 'slug name'
            })
            .lean({
                virtuals: true
            });

        return {
            ...category,
            subCategories
        };
    });

    const formattedCategories = await Promise.all(promises);

    return formattedCategories;
}

module.exports = getFormattedCategories;
