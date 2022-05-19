class GigsController < ApplicationController

    def index
        render json: Gig.all, status: :ok
    end

end
