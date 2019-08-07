async function getFormattedCategories() {
    const categories = await this.find({ parent: null }).populate({
        path: 'subCategories',
        populate: { path: 'parent', select: 'slug' }
    });

    return categories;
}

module.exports = getFormattedCategories;
