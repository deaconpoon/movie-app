FROM oraclelinux:7-slim as builder
ARG NPM_REGISTRY="https://registry.npmjs.org/"
ARG COMPARTMENT_ID=soydeacon
WORKDIR '/app'

COPY package.json .

RUN  yum -y install oracle-release-el7 oracle-nodejs-release-el7 && \
    yum-config-manager --disable ol7_developer_EPEL && \
    yum -y install oracle-instantclient19.3-basiclite nodejs && \
    rm -rf /var/cache/yum

RUN  yum -y install python3
RUN npm config set registry ${NPM_REGISTRY} 
RUN npm install
RUN npm install -g serve
COPY . .
RUN npm run build

RUN curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.16.0/bin/linux/amd64/kubectl \
    && chmod +x ./kubectl \
    && rm -rf /tmp/*

ENV PATH="/app:/bin:/root/bin:${PATH}"
ENV KUBECONFIG="/root/.kube/config"
ENV LC_ALL="en_US.utf8"
ENV C ${COMPARTMENT_ID}

RUN curl -LO https://raw.githubusercontent.com/oracle/oci-cli/master/scripts/install/install.sh \
    && chmod +x ./install.sh  \
    && ./install.sh --accept-all-defaults


EXPOSE 80
ENTRYPOINT ["/bin/bash"]
CMD []