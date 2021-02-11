json.author do
  json.extract! @author, :id, :name, :books, :created_at
end
