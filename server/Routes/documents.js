export const getDocuments = async (req, res) => {
  try {
    res.status(200).send([
      'Document 1',
      'Document 2',
      'Document 3',
    ]);
  } catch (err) {
    res.status(500).send(err);
  }
}
