interface Props {
  categoryId: string;
  setExpandedCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

export const toggleCategory = ({
  categoryId,
  setExpandedCategories,
}: Props) => {
  setExpandedCategories((prevExpanded: string[]) => {
    return prevExpanded.includes(categoryId)
      ? prevExpanded.filter((id) => id !== categoryId)
      : [...prevExpanded, categoryId];
  });
};

/* const toggleCategory = (categoryId) => {
  setExpandedCategories((prevExpanded) => {
    if (prevExpanded.includes(categoryId)) {
      return prevExpanded.filter((id) => id !== categoryId);
    } else {
      return [...prevExpanded, categoryId];
    }
  });
}; */
