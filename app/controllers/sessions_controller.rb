class SessionsController < ApplicationController

    def create
        agent = Agent.find_by(username: params[:username])
        if agent&.authenticate(params[:password])
            session[:agent_id] = agent.id
            render json: agent, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end
    

    def destroy
        if session[:agent_id] 
            session.delete :agent_id
            head :no_content
        elsif session[:artist_id]
            session.delete :artist_id
            head :no_content
        else
            render json: { errors: "No user currently logged in" }, status: 401
        end
    end
end
