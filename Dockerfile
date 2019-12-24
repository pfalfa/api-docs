##########################################################################
# How to :
# Build : docker build -t pfalfa-api-docs .
# Run : docker run --name pfalfa-api-docs -d -p 3030:3030 pfalfa-api-docs
##########################################################################

FROM node:10

# setting the work directory
WORKDIR /app

# copy sources
COPY . .

# install dependencies
RUN npm install

# expose port
EXPOSE 3030

# execute
CMD [ "node", "index.js" ]
